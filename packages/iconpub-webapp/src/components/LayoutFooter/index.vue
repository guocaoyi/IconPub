<script lang="ts" setup>
import config from '@/config'
</script>

<template>
  <div class="about-wrap">
    <div class="about">
      <div class="about-columns">
        <div class="column-title">{{ $t('about.project.label') }}</div>
        <p>
          <a href="https://icons.pub" target="_blank" rel="noopener">{{
            $t('about.project.about')
          }}</a>
        </p>
        <p>
          <a href="" target="_blank" rel="noopener">{{ $t('about.project.readme') }}</a>
        </p>
        <p>
          <a href="" target="_blank" rel="noopener">{{ $t('about.project.issues') }}</a>
        </p>
        <p>
          {{ $t('about.project.license') }}
        </p>
      </div>
      <div class="about-columns">
        <div class="column-title">{{ $t('about.dev.label') }}</div>
        <p>
          <a href="" target="_blank" rel="noopener">{{ $t('about.dev.github') }}</a>
        </p>
        <p>
          <a href="" target="_blank" rel="noopener">{{ $t('about.dev.gitee') }}</a>
        </p>
        <p>
          <a href="" target="_blank" rel="noopener">{{ $t('about.dev.gitlab') }}</a>
        </p>
      </div>
      <div class="about-columns">
        <div class="column-title">{{ $t('about.source.label') }}</div>
        <p>
          <a :href="config.github" target="_blank" rel="noopener">{{ $t('about.source.react') }}</a>
        </p>
        <p>
          <a href="https://hub.docker.com/u/yalda" target="_blank" rel="noopener">{{
            $t('about.source.docker')
          }}</a>
        </p>
      </div>
      <div class="about-columns">
        <div class="column-title">{{ $t('about.social.label') }}</div>
        <p class="github">
          <a :href="config.github" target="_blank" rel="noopener">
            <img alt="" src="" style="margin-right: 0.5rem" />
          </a>
        </p>
      </div>
    </div>

    <footer>
      <span>© 2022 {{ config.author.toUpperCase() }} &nbsp;</span>
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010602011142">
        {{ $t('about.license.police') }} &nbsp;</a
      >
      <a href="https://beian.miit.gov.cn/#/integrated/index"> {{ $t('about.license.icp') }}</a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.about-wrap {
  width: 100%;
  min-width: 86rem;
  background-color: var(--ep-bg-color-overlay);
  display: flex;
  flex-direction: column;
}

.about {
  width: 86rem;
  margin: 0 auto;
  padding: 2rem 0 0;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: var(--ep-text-color-primary);
  display: flex;
}

.about-columns {
  display: block;
  width: 11.25rem;
  margin-right: 50px;
  line-height: 1.25rem;

  .column-title {
    color: var(--ep-text-color-primary);
    font-weight: 500;
    margin-bottom: 1.25rem;
    margin-top: 3px;
  }

  a {
    color: var(--ep-text-color-primary);
    text-decoration: none;
  }
}

footer {
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8rem;
  line-height: 1rem;

  span {
    color: var(--ep-text-color-primary);
  }

  a {
    color: var(--ep-text-color-primary);

    background-color: transparent;
    text-decoration: none;
  }
}
</style>
