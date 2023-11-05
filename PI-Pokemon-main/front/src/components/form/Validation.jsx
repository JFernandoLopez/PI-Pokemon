
const Validation = (pokemonData) => {
 const errors = {}

 if(pokemonData.name === ''){ errors.name = 'Invalid name'}

 if(/\s/g.test(pokemonData.name)){ errors.name = "Invalid space in name"}

 if (!pokemonData.image.includes('.jpg') && !pokemonData.image.includes('.png')){ errors.image = "Image must have format .jpg/.png"}

 if(/\s/g.test(pokemonData.image)){ errors.image = "Invalid space in image"}

 if(parseInt(pokemonData.hp) >= 255){ errors.hp = "Healt points must be low 256 points"}

 if(pokemonData.hp === ''){ errors.hp = 'Put some health points to your pokemon'}

 if(parseInt(pokemonData.attack) >= 190){ errors.attack = "Attack points must be low 191 points"}

 if(pokemonData.attack === ''){ errors.attack = 'Put some attack points to your pokemon'}
 
 if(parseInt(pokemonData.defense) >= 230){ errors.defense = "Defense points must be low 231 points"}

 if(pokemonData.defense === ''){ errors.defense = 'Put some defense points to your pokemon'}
 
 if(parseInt(pokemonData.speed) >= 138) {errors.speed = "Speed points must be low 138 points"}

 if(pokemonData.speed === '') {errors.speed = 'Put some points to your pokemon'}
 
 if(parseInt(pokemonData.height) >= 201) {errors.height = "Height points must be low 200 points"}

 if(pokemonData.height === ''){errors.height = 'Put some height points to your pokemon'}
 
 if(parseInt(pokemonData.weight) >= 9999) {errors.weight = "Weight points must be low 10000 points"}

 if(pokemonData.weight === '') {errors.weight = 'Put some weight points to your pokemon'}

 if(pokemonData.types[0] === "" && pokemonData.types[1] === ""){errors.types = "Put at least one types for your pokemon"}
 
 return errors
}

export default Validation;