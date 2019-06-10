<template>
<div class="album">
  <v-layout>
    <v-flex xs3 sm3 offset-sm1>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="1.8"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat icon color="blue lighten-2">
            <v-icon>thumb_up</v-icon>
          </v-btn>
          <v-btn flat icon color="blue lighten-2">
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
     <v-flex xs3 sm3 offset-sm1>   
          <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="1.8"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat icon color="blue lighten-2">
            <v-icon>thumb_up</v-icon>
          </v-btn>
          <v-btn flat icon color="blue lighten-2">
            <v-icon>share</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
     </v-flex>
  </v-layout>
  </div>
</template>