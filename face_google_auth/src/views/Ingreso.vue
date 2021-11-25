<template>
    <div>
    <v-layout justify-center >
        <v-flex xs12 sm8 md6 xl4> 
            <v-card>
                <v-card-text class="display-1 text-uppercase primary text-center white--text">
                    <span>Vista de Ingreso</span>
                </v-card-text>
                 <v-card-text >
                    <v-card-text>
                        
                        <v-btn block color="error">
                             <v-icon leftdark class="mr-2">fab fa-google</v-icon>
                            Google
                        </v-btn>
                        <v-btn block color="info mt-2">
                          <v-icon leftdark class="mr-2">fab fa-facebook</v-icon>
                            Facebook
                        </v-btn>
                    </v-card-text>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
    </div>
</template>

<script>
export default {
    
}
</script>