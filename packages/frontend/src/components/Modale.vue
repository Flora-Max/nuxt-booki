<template>
    <div>
       <div>
        <b-button v-b-modal.modal-1>Je réserve/j'ajoute</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
            <p class="my-4">{{content}}</p>
        </b-modal>
</div>
    </div>
    
</template>

<script>
export default {
    name: 'Modale',
    props: ['title', 'content']
}
</script>