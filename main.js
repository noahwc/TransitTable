Vue.component('list',{
    template: `
    <div>
        <input v-model="stop" placeholder="Stop number">
        <button v-on:click="submit_query = 1">Lookup bus times</button>
        <ul v-if="gotList" id="times-list">
            <li v-for="time in times">
                {{time.times}}
            </li>
        </ul>
    </div>
    `
})

var app = new Vue({
    el: '#main',
    data: {
    }
})