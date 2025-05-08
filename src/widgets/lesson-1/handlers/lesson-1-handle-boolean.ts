export const handleBoolean = (param: boolean) => ({
  isTrue: param,
  paramMessage: param ? 'Yes' : 'No',
});
