<script>
  export let name, gender, __typename = ''

  const emojiByGender = {
    'MALE': '👱‍♂️',
    'FEMALE': '👱‍♀️'
  }
</script>

<div>
  <span>{emojiByGender[gender] || '🤖'}</span>
  {name}
</div>