<template>
  <div class="w-40">
    <Listbox v-model="locale">
      <div class="relative mt-1">
        <ListboxButton
          class="flex items-center justify-between gap-2 w-full cursor-pointer rounded-lg bg-light p-2 text-left shadow-xl focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <div class="flex gap-2 items-center">
            <div class="w-6 h-6 object-cover rounded-full overflow-hidden border border-text-base">
              <img
                v-if="supportedLocales[locale]"
                :src="supportedLocales[locale].src"
                :alt="locale"
                class="w-full h-full">
            </div>
            <span class="block truncate">{{ $t(`${locale}`) }}</span>
          </div>
          <span class="flex items-center pr-2">
            <ChevronDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="(value, key) in supportedLocales"
              :key="key"
              :value="key"
              as="template"
            >
              <li
                class="text-btn-dark flex gap-2 items-center cursor-pointer select-none py-2 px-3 hover:bg-light-gray"
              >
                <div class="w-6 h-6 object-cover rounded-full overflow-hidden border border-text-base">
                  <img
                    :src="supportedLocales[key].src"
                    :alt="[key]"
                    class="w-full h-full">
                </div>
                <span
                  :class="[selected ? 'font-medium' : 'font-normal', 'block truncate']">
                    {{ $t(`${key}`) }}
                </span>
                <span v-if="selected">
                  <CheckIcon class="h-5 w-5 text-dark" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { CheckIcon, ChevronDownIcon } from "vue-tabler-icons"
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue"

defineProps({
  supportedLocales: {
    type: Object,
    required: true,
  },
})

const { t, locale } = useI18n();

watch(locale, () => {
  sessionStorage.setItem("locale", locale.value)
})
</script>
