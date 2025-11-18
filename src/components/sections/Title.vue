<script lang="ts" setup>
import { ElIcon } from "element-plus";
import { Document, Picture, DataAnalysis } from "@element-plus/icons-vue";

const githubIcon = new URL("icon/github.svg", import.meta.env.BASE_URL).href;
const arxivIcon = new URL("icon/arxiv.svg", import.meta.env.BASE_URL).href;

// logo地址，没有则置为""即可
const logo = "";

// 标题
const title = "WIPES: Wavelet-based Visual Primitives";

// 标题颜色
const title_color = "#000000";

// 标题补充，没有则置为''即可
const title_supp = "";

// 标题补充颜色
const title_supp_color = "#42B883";

// 按钮颜色
const btn_color = "#444444";

// 作者清单（包含作者姓名、头像、主页、地址序号）
const authors = [
  {
    name: "Wenhao Zhang",
    icon: "",
    homepage: "https://github.com/MITNKU",
    address_flag: "1,†",
  },
  {
    name: "Hao Zhu",
    icon: "",
    homepage: "https://pakfa.github.io/zhuhao_photo.github.io/",
    address_flag: "1,†",
  },
  {
    name: "Delong Wu",
    icon: "",
    homepage: "https://ep1phany05.github.io/",
    address_flag: "1,†",
  },
  {
    name: "Di Kang",
    icon: "",
    homepage: "https://scholar.google.com/citations?user=2ztThPwAAAAJ&hl=zh-CN",
    address_flag: "2",
  },
  {
    name: "Linchao Bao",
    icon: "",
    homepage: "https://linchaobao.github.io/",
    address_flag: "2",
  },
  {
    name: "Xun Cao",
    icon: "",
    homepage: "https://cite.nju.edu.cn/People/Faculty/20190621/i5054.html",
    address_flag: "1,*",
  },
  {
    name: "Zhan Ma",
    icon: "",
    homepage: "https://vision.nju.edu.cn/fc/d3/c29470a457939/page.htm",
    address_flag: "1",
  },
];

// 地址清单（包含地址名称、头像、主页、地址序号）
const addresses = [
  {
    address_flag: "1",
    name: "Nanjing University",
    icon: "",
    homepage: "",
  },
  {
    address_flag: "2",
    name: "Tencent",
    icon: "",
    homepage: "",
  },
];

// 共一和通讯提示
const con_and_corresponding_author =
  "†: Equal Contribution. *: Corresponding Author";
// 最新消息
const news = "";

// 强调内容
const emphases = ["🎉 [ICCV 2025] Poster"];

// 提供引导资料链接
const buttons = [
  {
    disabled: false,
    name: "Paper",
    link: "https://openaccess.thecvf.com/content/ICCV2025/papers/Zhang_WIPES_Wavelet-based_Visual_Primitives_ICCV_2025_paper.pdf",
    component: Document,
  },
  {
    disabled: false,
    name: "Code",
    link: "https://github.com/MITNKU/wavelet-splatting",
    icon: githubIcon,
  },
  {
    disabled: false,
    name: "arXiv",
    link: "https://arxiv.org/abs/2508.12615",
    icon: arxivIcon,
  },
  {
    disabled: false,
    name: "Poster",
    link: "https://iccv.thecvf.com/virtual/2025/poster/2529",
    component: DataAnalysis,
  },
];
</script>

<template>
  <div>
    <!-- 最新消息提示 -->
    <!-- <el-row justify="center">
      <el-col :span="24">
        <el-alert title="🔥 This template is still under development." type="success" />
      </el-col>
    </el-row> -->

    <!-- 文章logo -->
    <el-row v-if="logo" justify="center">
      <el-image :src="logo" class="logo" fit="cover" />
    </el-row>

    <!-- 文章标题 -->
    <el-row justify="center">
      <el-col :span="20">
        <h1 class="paper-title">
          <span v-if="title" :style="{ color: title_color }"> {{ title }}</span>
          <span v-if="title_supp" :style="{ color: title_supp_color }">
            {{ title_supp }}</span
          >
        </h1>
      </el-col>
    </el-row>

    <!-- 作者名单 -->
    <el-row justify="center">
      <a :href="author.homepage" v-for="author in authors">
        <el-button class="title-button" type="primary" text>
          <el-avatar v-if="author.icon" :size="40" :src="author.icon" />
          <span class="author">
            {{ author.name
            }}<sup v-if="author.address_flag" class="name_sup">{{
              author.address_flag
            }}</sup>
          </span>
        </el-button>
      </a>
    </el-row>

    <!-- 地址名单 -->
    <el-row justify="center">
      <a :href="address.homepage" v-for="address in addresses">
        <el-button class="title-button" type="primary" text>
          <el-avatar v-if="address.icon" :size="40" :src="address.icon" />
          <span class="address">
            <sup v-if="address.address_flag" class="address_sup">{{
              address.address_flag
            }}</sup
            >{{ address.name }}
          </span>
        </el-button>
      </a>
    </el-row>

    <!-- 共一和通讯提示内容 -->
    <el-row justify="center" class="con-cor">
      {{ con_and_corresponding_author }}
    </el-row>

    <!-- 强调内容 -->
    <el-row justify="center" class="emphasis" v-for="emphasis in emphases">
      {{ emphasis }}
    </el-row>

    <!-- 提供引导按钮 -->
    <el-row justify="center" style="margin-bottom: 20px">
      <el-col :span="20">
        <el-row justify="center">
          <a
            :href="button.link"
            v-for="button in buttons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <el-button
              class="guidance-button"
              size="default"
              :color="btn_color"
              :disabled="button.disabled"
              round
            >
              <el-icon v-if="button.component" :size="18">
                <component :is="button.component" />
              </el-icon>
              <img
                v-else-if="button.icon"
                :src="button.icon"
                alt=""
                class="btn-img"
              />
              <span class="btn-text">{{ button.name }}</span>
            </el-button>
          </a>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
/* 文章标题字体、字间距、居中排布、字号 */
.paper-title {
  font-family: "MyFont", Verdana, sans-serif;
  letter-spacing: 2px;
  font-size: 42px;
  margin: 32px;
  text-align: center;
}

/* 姓名和地址按钮 */
.title-button {
  margin: 10px 3px;
}

/* 姓名和地址按钮光标悬浮 */
.title-button:hover {
  margin: 10px 8px;
}

/* 引导材料按钮 */
.guidance-button {
  margin: 8px 5px;
  box-shadow: #d8d8d8 1px 1px 1px 1px;
}

.btn-img {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}

/* 姓名属性 */
.author {
  font-size: 18px;
  margin-left: 3px;
}

/* 姓名上标属性 */
.name_sup {
  color: #606266;
  margin-left: 3px;
}

/* 地址属性 */
.address {
  font-size: 18px;
}

/* 地址上标属性 */
.address_sup {
  color: #606266;
  margin-right: 1px;
}

/* 头像属性 */
.el-avatar {
  margin-right: 6px;
  box-shadow: #b7b7b7 0px 0px 3px 1px;
}

/* 共一和通讯文字属性 */
.con-cor {
  font-family: Arial;
  font-size: 18px;
  margin: 18px 0px;
  text-align: center;
}

/* 强调信息属性 */
.emphasis {
  color: chocolate;
  font-weight: bold;
  margin: 8px;
  font-size: 22px;
  text-align: center;
}

/* 引导材料按钮文字属性 */
.btn-text {
  font-size: 18px;
  color: #ffffff;
}

.el-alert {
  margin: 10px 0 0;
}

.el-alert:first-child {
  margin: 0;
}

.logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: #ced3dc 0px 0px 3px 2px;
  margin-top: 40px;
}

/* 手机端链接样式处理 */
a:-webkit-any-link {
  text-decoration: none;
}

/* 取消鼠标焦点悬浮在链接上的颜色装饰 */
a:hover {
  color: inherit;
  border-bottom: none;
}

/* 链接装饰，取消下划线和链接颜色 */
a {
  text-decoration: None;
  color: inherit;
}
</style>
