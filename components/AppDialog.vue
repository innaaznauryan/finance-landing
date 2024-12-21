<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-light px-6 py-12 text-center shadow-custom transition-all">
              <p class="text-2xl text-dark text-center">
                <span v-if="!submissionError" class="text-text-accent">{{t("thankYou")}}</span>
                <span class="text-dark">{{dialogMessage}}</span>
              </p>
              <AppButton
                btnClass="bg-light text-dark border border-text-accent"
                @click="closeModal">
                  {{ t("sections.suggestions.close") }}
              </AppButton>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  closeModal: {
    type: Function,
    required: true,
  },
  submissionError: {
    type: Boolean,
    required: true,
  },
  dialogMessage: {
    type: [String, null],
    required: true,
  },
})

const { t } = useI18n();
</script>
