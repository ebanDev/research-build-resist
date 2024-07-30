<script setup>
onMounted(() => {
  const typebotInitScript = document.createElement("script");
  typebotInitScript.type = "module";
  typebotInitScript.innerHTML = `import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js'

Typebot.initStandard({ typebot: "my-typebot-1py3k12" });
`;
  document.body.append(typebotInitScript);});
</script>

<template>
  <section>
    <div class="titles">
      <h2 id="contact">Let's <span>connect</span>!</h2>
    </div>

    <div class="twocol">
      <p>
        {{ $t('contactDesc') }}

        <ul>
          <li>
            <Icon name="lucide:mail" /> <a href="mailto:pro@eban.eu.org"> pro@eban.eu.org </a>
          </li>
          <li>
            <Icon name="lucide:calendar" /> <a href="https://calendly.com/eban-rami/prise-de-contact-devis?back=1&month=2024-07" target="_blank"> Réserver un appel </a>
          </li>
        </ul>
      </p>
      <typebot-standard></typebot-standard>
    </div>
 </section>
</template>

<style scoped lang="scss">
.twocol {
  display: flex;
  gap: 30px;
  justify-content: space-between;

  p {
    max-width: 500px;
    font-size: 1.3rem;
  }
}

typebot-standard {
  border-radius: 10px;
  width: clamp(300px, 80vw, 800px);
  height: 700px;
  border: 2px solid #E6E3E1;
  box-shadow: 2px 2px 15px 0 rgba(40, 10, 0, 0.05);
}

@media (max-width: 768px) {
  .twocol {
    flex-direction: column;
  }
}
</style>
