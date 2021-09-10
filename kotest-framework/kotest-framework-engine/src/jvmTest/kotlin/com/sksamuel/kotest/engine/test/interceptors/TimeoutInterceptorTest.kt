package com.sksamuel.kotest.engine.test.interceptors

import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.sourceRef
import io.kotest.core.spec.style.FunSpec
import io.kotest.core.spec.toDescription
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.core.test.TestType
import io.kotest.engine.test.NoopTestContext
import io.kotest.engine.test.interceptors.TestTimeoutException
import io.kotest.engine.test.interceptors.TimeoutInterceptor
import kotlinx.coroutines.delay
import kotlin.time.Duration

class TimeoutInterceptorTest : FunSpec() {
   init {
      test("TimeoutInterceptor should throw TestTimeoutException after timeout") {

         val tc = TestCase(
            InvocationCountCheckInterceptorTest::class.toDescription().appendTest("foo"),
            InvocationCountCheckInterceptorTest(),
            {},
            sourceRef(),
            TestType.Test,
         )

         shouldThrow<TestTimeoutException> {
            TimeoutInterceptor.intercept { _, _ ->
               delay(10000)
               TestResult.success(0)
            }.invoke(
               tc.copy(config = tc.config.copy(timeout = Duration.milliseconds(1))),
               NoopTestContext(tc, coroutineContext)
            )
         }
      }
   }
}