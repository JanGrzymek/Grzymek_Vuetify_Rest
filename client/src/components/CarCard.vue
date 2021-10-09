<template>
  <div>
    <v-card class="mx-auto my-12" max-width="374">
      <v-img height="250" :src="car.image"></v-img>

      <v-card-title>{{ car.title }}</v-card-title>

      <v-card-text>
        <div>
          Owner: {{ car.owner.firstName }} {{ car.owner.lastName }}<br /><br />
          Year: {{ car.yearOfMake }} <br />
          Miles: {{ car.miles }}<br /><br />
          <span v-if="car.status == 'available'"> Price: {{ car.price }}<br /><br /> </span>
          <span v-else> Price: N/A<br /><br /> </span>
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions style="height: 60px">
        <span v-if="car.status == 'available'">
          <v-btn color="white--text purple" :to="`/details/${car.id}`">
            Details
          </v-btn>
        </span>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    car: {
      type: Object,
      default: () => {},
    },
  },
  methods: {},
};
</script>
