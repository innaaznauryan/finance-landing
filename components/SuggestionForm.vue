<template>
  <div class="w-4/5 my-12 md:my-48">
    <FormHeading :title="$t('sections.suggestions.subtitle')"/>
    <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
      <AppInput
        v-model="email"
        :errorMessage="v$.email.$errors[0]?.$message"
        @blur="v$.email.$touch()"
        label="email"
        topic="suggestions"
        :icon="emailIcon" />
      <AppCheckbox
        v-model="hide"
        label="hide"
        topic="suggestions" />
      <AppTextArea
        v-model="comment"
        :errorMessage="v$.comment.$errors[0]?.$message"
        @blur="v$.comment.$touch()"
        label="comment"
        topic="suggestions" />
      <AppButton
        type="submit"
        btnClass="bg-btn-primary text-light w-full border border-btn-primary hover:border-light">
          {{ $t("sections.suggestions.send") }}
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

const runtimeConfig = useRuntimeConfig()

defineProps({
  emailIcon: {
    type: String,
    default: "",
  }
})

const { t } = useI18n();

const email = ref(null)
const hide = ref(false)
const comment = ref(null)

const isOpen = ref(false)
const submissionError = ref(false)
const dialogMessage = computed(() => {
  return submissionError.value ? t("sections.suggestions.errorMessage") : t("sections.suggestions.successMessage")
})

const rules = computed(() => {
  return {
    email: { required, emailValidator },
    comment: { required },
  }
})

const v$ = useVuelidate(rules, { email, comment })

const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}

const handleSubmit = async (e) => {
  const valid = await v$.value.$validate()
  if (!valid) {
    return
  }
  try {
    const url = runtimeConfig.public.suggestionsApiKey
    const data = {
      email: hide.value ? null : email.value,
      comment: comment.value?.trim().replace(/\s+/g, " ")
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
