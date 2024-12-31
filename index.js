const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
iniciarJogo()
class jogo{
    constructor(nomeHeroi,nivelHeroi,tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.nivelHeroi = nivelHeroi
        this.tipoHeroi = tipoHeroi.toLowerCase()
    }
    ataques(){
        let ataquesPorTipo = {
            guerreiro: "espada",
            mago: "magia",
            monge: "artes marciais",
            ninja: "shuriken",

        }
        return ataquesPorTipo[this.tipoHeroi] || "ataque básico"
    }
    saida(){
        console.log(`O ${this.tipoHeroi} de nome ${this.nomeHeroi} do nível ${this.nivelHeroi} atacou bravamente usando ${this.ataques()}`)
    }
}
async function coletarDadosHeroi(){
    let nome = await perguntar("Qual é o nome do seu herói? ")
    let nivel = await perguntar("Qual é o nível do seu herói? ")
    let tipo = await perguntar("Qual é o tipo do seu herói?(ex: guerreiro,mago, monge, ninja) ")

    let heroi = new jogo(nome,nivel, tipo)
    return heroi
}
function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}
async function iniciarJogo() {
    let heroi = await coletarDadosHeroi();
    heroi.saida(); 
    rl.close();  
}