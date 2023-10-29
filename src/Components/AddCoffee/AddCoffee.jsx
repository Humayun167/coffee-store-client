import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const newCoffee ={name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);

        fetch('http://localhost:2000/coffee',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.interesetedId){
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
    })
        
        
    }
    
  return (
    <div className="bg-[#F4F3F0] p-24 ">
      <h3 className="text-3xl font-extrabold text-slate-950">Add a Coffee</h3>
      <form onSubmit={handleAddCoffee} >
        {/* Coffee name */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2 mr-3">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="CoffeeName"
                className="input input-bordered w-full"
              />
            </label>
          </div>
      
        {/* Suplier */}

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label className="input-group">
              <span>Quantity</span>
              <input
                type="text"
                name="quantity"
                placeholder="Available quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/*  */}

        <div className="md:flex mb-8">
          <div className="form-control w-1/2 mr-3">
            <label className="label">
              <span className="label-text"> Supplier</span>
            </label>
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
      
        {/* Taste */}

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* category */}
        </div>
        <div className="md:flex mb-8">
          <div className="form-control w-1/2 mr-3">
            <label className="label">
              <span className="label-text">Category </span>
            </label>
            <label className="input-group">
              <span>category</span>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
      
        {/* Suplier */}

          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text"> Details</span>
            </label>
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

{/* photo url row */}

        <div className="md:flex mb-8">
          <div className="form-control w-full mr-3">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <span>Photo URl</span>
              <input
                type="text"
                name="photo"
                placeholder="PhotoURl"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
       
        <input type="submit" value="Add coffee"className="btn btn-block" />

      </form>
    </div>
    
  );
};

export default AddCoffee;
