<template>
	<section class="info">
		<Header/>
		<div class="info__main">
			<h1 class="info_initials">Sergej Gorbacevskij</h1>
			<h2 class="info_bio">My biography</h2>
      <p class="info_description">Hi! I am newcomer to the riveting field of web development</p>
		</div>
	</section>
</template>
<script>
import Header from '@/components/Header'
export default {
	name: 'Info',
	components: {
		Header
	}
}
</script>

<style lang="scss">
.info {
  display: flex;
  flex-flow: column;
  min-height: 50vh;
  background-color: rgb(19, 87, 23);
  align-items: center;
  padding: 0 120px;
  &__main {
    display: flex;
    flex-flow: column;
    justify-content: center;
    flex: 1;
    padding-top: 250px;
    padding-bottom: 145px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    text-align: center;
  }
  &__initials {
    font-size: 36px;
    padding: 0;
    margin: 0;
    font-weight: 600;
    padding-bottom: 15px;
  }
  &__bio {
    font-size: 18px;
    padding: 0;
    margin: 0;
    font-weight: 600;
  }
  &_description {
    font-size: 15px;
    padding: 0;
    margin: 0;
    font-weight: bold;
  }
}
</style>