<template>
	<header class="apph">
		<Navig
			class="apph__navig"
			:navigation="navigation"
		/>
	</header>
</template>
<script>
import Navig from '@/components/Navig'
import routes from '@/routes'
export default {
	name: 'Header',
	components: {
		Navig
	},
	computed: {
		navigation () {
			return routes.filter(route => route.meta.displayName).map(route => {
				return {
					name: route.meta.displayName,
					to: {
						name: (route.meta.useChildName) ? route.children[0].name : route.name
					}
				}
			})
		}
	}
}
</script>
<style lang="scss">
.apph {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  &__navig {
    padding-top: 45px;
    padding-bottom: 40px;
  }
}
</style>