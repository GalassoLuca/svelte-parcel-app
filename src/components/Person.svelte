<script>
  export let name, gender

  const emojiByGender = {
    'MALE': '👱‍♂️',
    'FEMALE': '👱‍♀️'
  }
</script>

<div>
  <span>{emojiByGender[gender] || '🤖'}</span>
  {name}
</div>