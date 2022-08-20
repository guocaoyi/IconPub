<template>
  <div class="about-wrap">
    <div class="about">
      <div class="about-columns">
        <div class="column-title">{{ $t('about.me') }}</div>
      </div>
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
          <a href="" target="_blank" rel="noopener">{{ $t('about.project.license') }}</a>
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
          <a href="https://github.com/guocaoyi/iconpub" target="_blank" rel="noopener">{{
            $t('about.source.react')
          }}</a>
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
          <a href="https://github.com/guocaoyi/IconPub" target="_blank" rel="noopener"
            ><img
              alt=""
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/bqaeh7vhobd/Github_logo.svg"
              style="margin-right: 8px"
          /></a>
        </p>
      </div>
    </div>

    <div class="footer">
      <span>© 2022 Yalda &nbsp;</span>
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010602011142">
        {{ $t('about.license.police') }} &nbsp;</a
      >
      <a href="https://beian.miit.gov.cn/#/Integrated/index"> {{ $t('about.license.icp') }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-wrap {
  width: 100%;
  min-width: 86rem;
  background-color: var(--ep-bg-color-overlay);
}

.about {
  width: 86rem;
  margin: 0 auto;
  padding: 2rem;
  font-size: 12px;
  line-height: 20px;
  color: var(--ep-text-color-primary);
  display: flex;
}

.about-columns {
  display: block;
  width: 180px;
  margin-right: 50px;
  line-height: 20px;

  .column-title {
    color: var(--ep-text-color-primary);
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 3px;
  }

  a {
    color: var(--ep-text-color-primary);
    text-decoration: none;
  }
}

.footer {
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8rem;
  line-height: 1rem;

  border-top: 1px solid var(--ep-bg-color-overlay);

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
