<template>
  <div class="w-4/5 my-12 md:my-48">
    <FormHeading :title="$t('sections.register.description')" />
    <form class="flex flex-col gap-2" @submit.prevent="handleSubmit">
      <AppInput
        v-model="email"
        :errorMessage="v$.email.$errors[0]?.$message"
        @blur="v$.email.$touch()"
        label="email"
        topic="register"
        :icon="emailIcon"
        name="email" />
      <AppInput
        v-model="name"
        :errorMessage="v$.name.$errors[0]?.$message"
        @blur="v$.name.$touch()"
        label="name"
        topic="register"
        :icon="profileIcon"
        name="name"/>
      <AppInput
        v-model="surname"
        :errorMessage="v$.surname.$errors[0]?.$message"
        @blur="v$.surname.$touch()"
        label="surname"
        topic="register"
        :icon="profileIcon"
        name="surname"/>
      <AppButton
        type="submit"
        btnClass="bg-btn-primary text-light w-full border border-btn-primary hover:border-light">
          {{ $t("sections.register.submit") }}
      </AppButton>
    </form>
  </div>
  <AppDialog
    :dialogMessage="dialogMessage"
    :submissionError="submissionError"
    :closeModal="closeModal"
    :isOpen="isOpen" />
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email as emailValidator } from '@vuelidate/validators'

defineProps({
  emailIcon: {
    type: String,
    default: "",
  },
  profileIcon: {
    type: String,
    default: "",
  },
})

const runtimeConfig = useRuntimeConfig()
const { t } = useI18n();

const email = ref(null)
const name = ref(null)
const surname = ref(null)

const isOpen = ref(false)
const submissionError = ref(false)
const dialogMessage = computed(() => {
  return submissionError.value ? t("sections.register.errorMessage") : t("sections.register.successMessage")
})

const rules = computed(() => {
  return {
    email: { required, emailValidator },
    name: { required },
    surname: { required },
  }
})

const v$ = useVuelidate(rules, { email, name, surname })

const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}

const handleSubmit = async () => {
  const valid = await v$.value.$validate()
  if (!valid) {
    return
  }
  try {
    const url = runtimeConfig.public.registerApiKey
    const data = {
      email: email.value,
      name: name.value?.trim().replace(/\s+/g, " "),
      surname: surname.value?.trim().replace(/\s+/g, " "),
      mission: "This user wants to subscribe to news"
    }
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const result = await response.json();
    submissionError.value = !result.ok
    openModal()
  } catch (error) {
    submissionError.value = true
    openModal()
  }
}
</script>
