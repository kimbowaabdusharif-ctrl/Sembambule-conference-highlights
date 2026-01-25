const navLinks=document.querySelector('.nav-links');
const testimonialsContainer=document.querySelector('.testimonial-container');
const testimonial=document.querySelector('.testimonial');
const username=document.querySelector('.username');
const role=document.querySelector('.role');
const counters = document.querySelectorAll('.counter')


const testimonials=[
    {
        name:'Roy Rugumayo',
        position:'Youth League Chairperson,Bunyangabu District',
        text:' I am Roy Rugumayo,one of the facilitators at the Sembabule Student leaders Conference themed"Unleashing the Next Generation of Ethical Leaders." Through interactive sessions,we engaged students with the goal of mentoring leaders for Uganda and Africa who can respond to society everyday needs.As one facilitator noted,we seek leaders who can turn our resources into opportunities for peoples transformation. This conference is vital, especially considering that 78% of our population is below 30 years,with half being students under 15. Targeting this age group is essential if we are to nurture progressive and transformational leaders for our societies.' ,
    },
    { 
        name:'Amos Nuwagaba',
        position:'Head Prefect,Sembabule C.O.U SS',
        text: ' I thank the organizers for this initiative, I have gained invaluable insights on personal development most especially how to realize personal values and stick on them ',
    },
{
    name: 'Laban',
    position: 'Academic Prefect, Uganda Martyrs SS',
    text: ' I am privileged to have been part of this conference,I have learnt good leadership ethics and am ready to lead ethically'
},
{
name:'Nayebare Emmanuel',
position: 'Head Prefect, St.Patrick Ntete SS',
text: ' I am really glad to be part of this essential conference where we have participated in great discussions about leadership under the theme "Unleashing The Next Generation Of Ethical Leaders" I have been sharpened and more than ready to lead positive change in my community '
}
]

let idx= 1;

function updateTestimonial() {
const {name, position, text}=  testimonials[idx];
testimonial.innerHTML=text;
username.innerHTML=name;
role.innerHTML=position;
idx = (idx+ 1) % testimonials.length;
}

setInterval(updateTestimonial, 10000);




const animateCounter=(counter,duration=1500)=>{
    const target = +counter.dataset.target
    let start= null

    const step= (timestamp)=>{
        if (!start) start=timestamp
        const progress= Math.min((timestamp-start)/ duration,1)
        counter.innerText=Math.floor(progress* target)

        if(progress<1){
            requestAnimationFrame(step)
        } else{
            counter.innerText=target
        }
    }
    requestAnimationFrame(step)
}

const observer= new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            animateCounter(entry.target)
            observer.unobserve(entry.target)
        }
    })
},{ threshold:0.6})

counters.forEach(counter=>{
    counter.innerText='0'
    observer.observe(counter)

})



// Ripple effect for .btn-primary
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();

        const rect = btn.getBoundingClientRect()
        const circle = document.createElement('span')
        circle.className = 'circle'

    
        const size = Math.max(rect.width, rect.height) 
        circle.style.width=circle.style.height='${size}px';
    

        
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        circle.style.left = `${x}px`
        circle.style.top = `${y}px`

        btn.appendChild(circle)

    
        setTimeout(() => 
            circle.remove()
        , 600);

        const href=btn.getAttribute('href');
        if (href){
            setTimeout(() => {
                window.location.href=href;
                
            },300);
        }
    })
})

