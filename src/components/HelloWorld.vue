<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <router-link tag="li" to="*">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link tag="li" to="/album">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>collections</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Album</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>notifications</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Notification</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>favorite</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Favorite</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Information Interface Design</v-toolbar-title>
    <v-spacer></v-spacer>
      <v-btn color="blue" dark>
        <v-icon dark>search</v-icon>
      </v-btn>
      <v-btn color="blue" dark>
        <v-icon dark>add_a_photo</v-icon>
      </v-btn>
    </v-toolbar>
    <upload-btn></upload-btn>
    <router-view class="router-view"></router-view>
  </v-app>
  

</template>

<script>
  export default {
    components:{
    },
    data: () => ({
      drawer: null,
    }),
    props: {
      source: String
    }
  }
</script>