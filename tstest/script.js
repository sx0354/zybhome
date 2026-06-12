// Simple form handler and small interactive touches
document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const data = new FormData(form);
    // Simulate sending
    msg.textContent = 'Sending message...';
    setTimeout(()=>{
      msg.textContent = 'Thanks, your message was sent.';
      form.reset();
    },900);
  });

  // Subtle fade-in for project cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((c,i)=>{c.style.opacity=0;c.style.transform='translateY(12px)';setTimeout(()=>{c.style.transition='opacity .6s ease, transform .6s cubic-bezier(.2,.9,.2,1)';c.style.opacity=1;c.style.transform='translateY(0)';},120*i)});
});