<template>
   <div class="list-products">
		<div class="list-products_sort">
			<Button
				class="list-products__filter-button"
				@click.native="sortBy('id')"
			>
				Sort by Id
			</Button>
			<Button
				class="list-products__filter-button"
				@click.native="sortBy('title')"
			>
				Sort by Title
			</Button>
			<Button
				class="list-products__filter-button"
				@click.native="filterBy({ key: 'quality', value: 5 })"
			>
				Quality > 4
			</Button>
			<Button
				class="list-products__filter-button"
				@click.native="filterBy({ key: 'id', value: 3 })"
			>
				Id > 3
			</Button>
			<Button
				class="list-products__filter-button"
				@click.native="reset"
			>
				Reset
			</Button>
		</div>
		<AppTextField @input="filterByText({ key: 'title', value: $event })" v-model="filterText" label="Filter by title text"/>
		<AppContainer v-if="products.length">
			<AppColumn
				v-for="photo in photos"
				:key="photo.id"
			>
				<AppCard :data="photo"/>
			</AppColumn>
		</AppContainer>
		<h3 v-else>Loading...</h3>
   </div>
</template>
<script>
// import AppContainer from '@/components/AppContainer'
// import AppColumn from '@/components/AppColumn'
// import AppCard from '@/components/AppCard'
import AppButton from '@/components/AppButton'
// import AppTextField from '@/components/AppTextField'
// import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'Products',
	components: {
		// AppContainer,
		// AppColumn,
		// AppCard,
		AppButton,
		// AppTextField
	},
	computed: {
		...mapGetters({
			products: [],
			filterText: 'Products/filterText'
		})
	},
	created () {
		this.getProducts()
	},
	methods: {
		...mapActions({
			getProducts: 'Products/getProducts',
			sortBy: 'Products/sortBy',
			filterBy: 'Products/filterBy',
			reset: 'Products/reset',
			filterByText: 'Products/filterByText'
		})
	}
}
</script>
<style lang="scss">
.list-products {
  &__filter {
    display: flex;
    margin: 0 -7.5px;
    padding-bottom: 20px;
    &-button {
      margin: 0 7.5px;
    }
  }
}
</style>