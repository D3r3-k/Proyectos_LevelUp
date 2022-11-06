var obj1 = {
    b: 2,
    c: 3,
    a: 1
    }
var obj2 = {
    a: "Apple",
    c: "Google",
    b: "Microsoft"
    }
var obj3 = {
    key1: true,
    key2: false,
    key3: undefined,
    }

    function separar(obj) {
        var ordenado = Object.entries(obj).sort()
        var keys = []
        var values = []
        for (const key in ordenado) {
            keys.push(ordenado[key][0])
            values.push(ordenado[key][1])
        }
        console.log("> Original");
        console.log(obj);
        console.log("> Separado  y Ordenado");
        console.log(keys);
        console.log(values);
    }

    separar(obj1)
    separar(obj2)
    separar(obj3)