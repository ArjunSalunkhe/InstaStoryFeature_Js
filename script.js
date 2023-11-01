let arr = [
    {
        dp:"img/plug.png",
        story:"img/ixperience.png"
    },
    {
        dp:"https://images.unsplash.com/photo-1698716206713-b2a8c7e50267?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
        story:"https://plus.unsplash.com/premium_photo-1697232651710-75749d6ac2a9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1698350082855-9ac182e07a0d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1698431126204-45d98a063012?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1698357856852-100709daa31e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTR8fHxlbnwwfHx8fHw%3D",
        story:"https://images.unsplash.com/photo-1698587729004-519ade81ac53?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fHw%3D"
    }
    
];

let clutter = "";
arr.forEach((e,id)=>{
    clutter = clutter + `<div class="stories">
    <img class="select" id ="${id}" src="${e.dp}" alt="">
</div>
`
})

document.querySelector(".story").innerHTML = clutter

document.querySelector(".story").addEventListener("click",(dets)=>{
    let val = arr[dets.target.id].story;
    // console.log(val);
    document.querySelector(".full-screen").style.display = "block";
    document.querySelector(".full-screen").style.backgroundImage = `url(${val})`

    setTimeout(()=>{
        document.querySelector(".full-screen").style.display = "none";
    },1000);
})


