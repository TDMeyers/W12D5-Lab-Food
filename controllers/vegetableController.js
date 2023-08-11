const vegetables = require('../models/vegetables')

// The callback function from the 'index' route

// GET  /vegetables
function index (req,res) {
    res.render('vegetables/Index', { vegetables });
}

// GET  /vegetables/:indexOfVegetable
function show (req,res) {
    if (vegetables[req.params.indexOfVegetable]){
        res.render('vegetables/Show', { vegetable: vegetables[req.params.indexOfVegetable], index: req.params.indexOfVegetable})
    } else {
        res.redirect('/vegetables');
    }
    // if (vegetables[req.params.indexOfVegetable]){
    //     res.render('vegetables/Show', { Vegetable: vegetables[req.params.indexOfVegetable]})
    // }
    // else{
    //     res.send('<h1>Not found</h1>')
    // }
    // res.send(vegetables[req.params.indexOfVegetable] || '<h1>Not found</h1>');
}

// GET  /vegetables/new
function newVegetable (req,res){
    res.render('vegetables/New')
}

// GET  /vegetables/:indexOfVegetable/edit
function edit (req,res){
    res.render('vegetables/Edit', { vegetable: vegetables[req.params.indexOfVegetable], index:req.params.indexOfVegetable })
}

// POST  /vegetables
function create(req,res){
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }
    else {
        req.body.readyToEat = false;
    }
    vegetables.push(req.body)
    res.redirect('/vegetables')
}

// DELETE  /vegetables/:indexOfVegetable
function destroy(req,res){
    console.log('DELETE  /vegetables/:indexOfVegetable')
    // vegetables.findIndex((Vegetable,index) => index == req.params.indexOfVegetable)
    let index = Number(req.params.indexOfVegetable)
    vegetables.splice(index, 1)
    res.redirect('/vegetables')
}


// PUT  /vegetables/:indexOfVegetable
function update(req,res){
    console.log('PUT  /vegetables/:indexOfVegetable')
    
    if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }
    else {
        req.body.readyToEat = false;
    }

    vegetables[req.params.indexOfVegetable] = req.body

    res.redirect('/vegetables')
}

module.exports = {
    index,
    show,
    newVegetable,
    create,
    destroy,
    edit,
    update
}