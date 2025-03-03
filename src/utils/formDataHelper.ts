
export function appendFilesToFormData(formData: FormData, files: File[], fieldName: string) {
  files.forEach((file) => {
    formData.append(fieldName, file);
  });
}
