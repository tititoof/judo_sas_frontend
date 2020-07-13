<template>
  <div style="height: 60vh">
    <client-only>
      <l-map :zoom=13 :center="[47.365564, 0.736521]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png">
        </l-tile-layer>
        <l-marker :lat-lng="[47.365564, 0.736521]">
          <l-popup>
            <div>
              Dojo SAS Judo-Jujitsu<br />
              <a target="_blank" :href="googleMaps">
                Château Fraisier, <br />
                espace sportif Maurice Pigeaud <br />
                37550 ST AVERTIN
              </a>
            </div>
          </l-popup>
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Dojo extends Vue {
  googleMaps: string =
    'https://www.google.fr/maps/place/Gymnase+Ch%C3%A2teau+Fraisier/@47.3656357,0.7330798,749m/data=!3m2!1e3!4b1!4m5!3m4!1s0x47fcd154b63424ad:0x7662bcd5a316eac8!8m2!3d47.3656321!4d0.7352685'
}
</script>
