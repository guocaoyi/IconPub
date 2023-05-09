<script lang="ts" setup>
import config from '@/config'
</script>

<template>
  <main>
    <div class="px-3">
      <input type="hidden" name="ga_id" class="js-octo-ga-id-input" />
      <div class="p-0">
        <h1>Sign in to {{ config.siteName }}</h1>
      </div>

      <BaseAlert />

      <div class="mt-3">
        <form action="/session" accept-charset="UTF-8" method="post">
          <input name="" value="" hidden />
          <label for="login_field"> Username or email address </label>
          <input
            type="text"
            name="login"
            class="form-control input-block js-login-field"
            autocapitalize="off"
            autocorrect="off"
            autocomplete="username"
            :autofocus="true"
          />

          <div class="position-relative">
            <label for="password"> Password </label>
            <input
              type="password"
              name="password"
              class="form-control form-control input-block js-password-field"
              autocomplete="current-password"
            />

            <input
              type="submit"
              name="commit"
              value="Sign in"
              class="btn btn-primary btn-block js-sign-in-button"
              development="false"
            />

            <a
              class="label-link position-absolute top-0 right-0"
              tabindex="0"
              href="/password/reset"
            >
              Forgot password?
            </a>
          </div>
        </form>
      </div>

      <p class="login-callout mt-3">
        New to {{ config.siteName }}?
        <a href="/signup">Create an account</a>
      </p>
    </div>
  </main>
</template>
