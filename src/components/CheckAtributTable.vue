<template>
    <div class="col-md-12">
        <div style="background-color: #DDD; float: left; padding-left: 1em; padding-right: 1em; border-radius: 5px; margin-bottom: 1em; margin-right: 1em;">
            <div class="checkbox">
                <label>
                    <input  @click="checkToggleRekap()" type="checkbox" /> 
                    <strong>Input Data Rekap.</strong>
                </label>
            </div>      
        </div>      
    </div>    
</template>
<style scoped>
input[type=checkbox]
{
  /* Double-sized Checkboxes */
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
}

/* Might want to wrap a span around your checkbox text */
.checkboxtext
{
  /* Checkbox text */
  font-size: 110%;
  display: inline;
}
</style>
<script>
export default {
    name: 'CheckAtributTable',
    data() {
        return {
            desaToggle: true,
            rekapToggle: false    
        }
    },    
    methods: {
        checkToggleDesa: function() {
            const desaToggle = this.desaToggle = !this.desaToggle; 
            this.$emit('checkToggleDesa', {'desaToggle' : desaToggle})
        },
        checkToggleRekap: function() {
            const rekapToggle = this.rekapToggle = !this.rekapToggle; 
            this.$emit('checkToggleRekap', {'rekapToggle' : rekapToggle})
        }        
    }   
}
</script>