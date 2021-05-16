export const toggleFieldLabel = (event) => {
  let field_label = event.currentTarget.parentElement.querySelector('.field__label');
  let input_state = (event.currentTarget.value || event.type === 'focus');
  field_label.classList.toggle('field__label_active', input_state);

  if (event.currentTarget.type === 'date') {
    input_state ? event.currentTarget.style.color = 'black' : event.currentTarget.style.color = 'transparent';
  }
}

const setEventsForFields = (form_fields) => {

    form_fields.forEach(field => {
        let field_input = field.querySelector('.field-input');

        ['blur', 'focus'].forEach(event_type => field_input.addEventListener(event_type, event => toggleFieldLabel(event)))
      })
}

export const lineForm = () => {
  let form_fields = document.querySelectorAll('.form-type--line .form-field');
  setEventsForFields(form_fields)
}

export const blockForm = () => {
  let form_fields = document.querySelectorAll('.form-type--block .form-field');
  setEventsForFields(form_fields)
}
