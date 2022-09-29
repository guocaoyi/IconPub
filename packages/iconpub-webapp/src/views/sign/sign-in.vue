<script lang="ts" setup></script>

<template>
  <main>
    <div class="auth-form px-3">
      <input type="hidden" name="ga_id" class="js-octo-ga-id-input" />
      <div class="auth-form-header p-0">
        <h1>Sign in to GitHub</h1>
      </div>

      <BaseAlert />

      <div class="auth-form-body mt-3">
        <form data-turbo="false" action="/session" accept-charset="UTF-8" method="post">
          <input
            name="authenticity_token"
            value="eoSpkuXbUnQKwMfh8To4erA1Bhv_Jqje_rfaSWb42TzF63ECse4218Ljtnzq5nt_UXpk0yypIhHsOCU9MOJxWw"
            hidden
          />
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
              data-disable-with="Signing in…"
              data-signin-label="Sign in"
              data-sso-label="Sign in with your identity provider"
              development="false"
            />

            <a
              class="label-link position-absolute top-0 right-0"
              tabindex="0"
              href="/password_reset"
              >Forgot password?</a
            >
          </div>
        </form>
      </div>

      <p class="login-callout mt-3">
        New to GitHub?
        <a href="/signup">Create an account</a>
        .
      </p>
    </div>
  </main>
</template>
