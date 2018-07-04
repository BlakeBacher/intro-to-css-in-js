
export function background(c1,c2,c3){
    return `linear-gradient(${c1},${c2},${c3})`
}
export function flex(str){
    return str === 'row'? 'display:flex; flex-direction:row' : 'display:flex; flex-direction:column'
}