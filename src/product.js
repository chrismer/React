const products = [
    {
    id: 1,
    name: 'Barbijos',
    image: '../img/barbijos.jpg',
    image2: '../img/barbijos2.jpg',
    old_price: '400',
    price: '300',
    category: 'accesorios',
    descripcion: 'Esto es un barbijo',
    stock: 10
    },
    {
    id: 2,
    name: 'Cofia + Barbijo',
    image: '../img/cofia.jpg',
    image2: '../img/cofia2.jpg',
    old_price: '800',
    price: '600',
    category: 'accesorios',
    descripcion: 'Esto es una cofia y un barbijo',
    stock: 9
    },
    {
    id: 3,
    name: 'Mantas',
    image: '../img/MANTA.jpg',
    image2: '../img/mantas.jpg',
    old_price: '1600',
    price: '1500',
    category: 'dormitorio',
    descripcion: 'Esto es una manta',
    stock: 8
    },
    {
    id: 4,
    name: 'Nido Contenedor',
    image: '../img/nido.jpg',
    image2: '../img/nido2.jpg',
    old_price: '400',
    price: '300',
    category: 'dormitorio',
    descripcion: 'Esto es un nido',
    stock: 7
    },
    {
    id: 5,
    name: 'Porta Macetas',
    image: '../img/porta-maceta.jpg',
    image2: '../img/porta-maceta-2.jpg',
    old_price: '800',
    price: '600',
    category: 'living',
    descripcion: 'Esto es un porta maceta',
    stock: 6
    },
    {
    id: 6,
    name: 'Porta Mate',
    image: '../img/porta-mate-2.jpg',
    image2: '../img/porta-mate.jpg',
    old_price: '400',
    price: '300',
    category: 'cocina',
    descripcion: 'Esto es un porta mate',
    stock: 5
    }
]

export const getProducts = (category)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            category ? resolve(products.filter(product => product.category === category)) : resolve(products)
        },1000)
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getItem = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products[0])
            // console.log(products[0])
        },2000)
    })
}

const categories = [
    {id:'accesorios',description:'Accesorios'},
    {id:'dormitorio',description:'Dormitorio'},
    {id:'living',description:'Living'},
    {id:'cocina',description:'Cocina'}
]

export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 3000)        
    })
}