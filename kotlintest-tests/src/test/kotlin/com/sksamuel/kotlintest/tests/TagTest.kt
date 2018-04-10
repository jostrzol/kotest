package com.sksamuel.kotlintest.tests

import io.kotlintest.StringTag
import io.kotlintest.Tag
import io.kotlintest.Tags
import io.kotlintest.shouldBe
import io.kotlintest.specs.StringSpec

class TagTest : StringSpec() {

  object Moo : Tag()
  object Foo : Tag()
  object Roo : Tag()

  init {
    "test with include and exclude tags" {
      val tags = Tags(setOf(Foo, StringTag("boo")), setOf(Moo))
      tags.isActive(Foo) shouldBe true
      tags.isActive(StringTag("boo")) shouldBe true
      tags.isActive(Moo) shouldBe false
      tags.isActive(StringTag("goo")) shouldBe false
      tags.isActive(Roo) shouldBe false
    }
    "test with include tags" {
      val tags = Tags(setOf(Foo, StringTag("boo")), emptySet())
      tags.isActive(Foo) shouldBe true
      tags.isActive(StringTag("boo")) shouldBe true
      tags.isActive(Moo) shouldBe false
      tags.isActive(StringTag("goo")) shouldBe false
      tags.isActive(Roo) shouldBe false
    }
    "test with exclude tags" {
      val tags = Tags(emptySet(), setOf(Moo))
      tags.isActive(Foo) shouldBe true
      tags.isActive(StringTag("boo")) shouldBe true
      tags.isActive(Moo) shouldBe false
      tags.isActive(StringTag("goo")) shouldBe true
      tags.isActive(Roo) shouldBe true
    }
    "test with no tags" {
      val tags = Tags(emptySet(), emptySet())
      tags.isActive(Foo) shouldBe true
      tags.isActive(StringTag("boo")) shouldBe true
      tags.isActive(Moo) shouldBe true
      tags.isActive(StringTag("goo")) shouldBe true
      tags.isActive(Roo) shouldBe true
    }
  }
}