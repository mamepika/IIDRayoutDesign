<template>
<div v-show="value" class="AddPhotoForm">

    <div class="AddPhotoForm">
        <h2 class="title">写真投稿</h2>
        <input class="form_item" type="file">
        <div class="form_button">
            <button type="submit" class="button button-inverse">投稿</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
}
</script>