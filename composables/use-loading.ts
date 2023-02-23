// reusable

export const useLoading = () => {
  const loading = ref(false)
  const loadingTitle = ref('Loading...')
  const hideLoading = () => (loading.value = !loading.value)

  onMounted(() => {
    loading.value = true
  })

  return { loading, loadingTitle, hideLoading }
}
