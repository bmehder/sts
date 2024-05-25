<section class="space full-width">
  <div class="intro flow">
    <h2 class="balance">Imagine a world where every attempt to enslave and exploit meets an unbreakable wall of informed guardians.<br><span>That's the world you're helping to build.</span></h2>
    <p>Here's the vision of success, painted with the strokes of your actions:</p>
  </div>

  <div class="grid">
    <div class="flow" style="background-image: url('/home/vision-success/1.jpg');">
      <h3>Empowered Communities</h3>
      <p>Streets where every person knows the signs of trafficking and how to act. A society vigilant, ready, and fearless. Your awareness sparks conversations, turning ignorance into empowerment.</p>
    </div>
    
    <div class="flow" style="background-image: url('/home/vision-success/2.jpg');">
      <h3>Rescued Lives</h3>
      <p>Each action you take, each sign you recognize, and each report you make translates into lives pulled back from the brink. Victims transformed into survivors, embarking on journeys of healing and reclaiming their futures.</p>
    </div>
    
    <div class="flow" style="background-image: url('/home/vision-success/3.jpg');">
      <h3>Amplified Voices</h3>
      <p>Your shares and donations echo across the globe, amplifying the signal of hope. Awareness spreads like wildfire, igniting change and challenging the status quo. More voices join the chorus, demanding action, justice, and safety.</p>
    </div>
    
    <div class="flow" style="background-image: url('/home/vision-success/4.jpg');">
      <h3>Policy Shifts</h3>
      <p>Your advocacy drives change at the highest levels. Laws evolve, protection strengthens, and survivors receive the support they need. A society reformed, with systems in place to prevent, protect, and empower.</p>
    </div>
  
    <div class="flow" style="background-image: url('/home/vision-success/5.jpg');">
      <h3>A Network of Heroes</h3>
      <p>You're not just a supporter; you're a beacon of hope in the darkness. A member of an ever-growing alliance committed to ending human trafficking. Together, creating a tapestry of change, woven from acts of courage, compassion, and conviction.</p>
    </div>
    
    <div class="flow" style="background-image: url('/home/vision-success/6.jpg');">
      <h3 class="balance">This is the success you're a part of.</h3>
      <p>Every download, every donation, every share brings this vision closer to reality. With each step you take, you light the path to freedom and safety for countless souls. </p>
    </div>
  </div>
</section>

<style>
  section {
    background-color: white;
  }

  .intro {
    margin-block-end: var(--size-2);
    text-align: center;
  }

  h2 span{
    color: var(--teal);
  }

  .grid {
    gap: var(--size-0-5);
    font-weight: 400;
    
    @media (width > 40rem) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .grid div {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 2;
    padding-block: var(--size-6);
    padding-inline: var(--size-4);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: white;
    border-image: fill 0 linear-gradient(#0005, #0009);
    box-shadow: 0 1px 13px #e9e9e9;

    @media (width < 32rem) {
      padding: var(--size-2);
    }
  }

  .grid div h3 {
    margin-block-start: auto;
  }

  h3 {
    font-weight: 600;
  }
</style>