package com.example.bannerhub_backend.banner;

class Specifications {
   private static final String GOOGLE_TEMPLATE = "<meta name=\"ad.size\" content=\"width=%s,height=%s\">\n" +
           "<script src=\"https://s0.2mdn.net/ads/studio/cached_libs/createjs_2019.11.15_min.js\"></script>\n" +
           "<script type=\"text/javascript\">\n" +
           "      var clickTag = \"%s\";\n" +
           "</script>";

   private static final String INBOX_TEMPLATE = "<script type=\"text/javascript\">\n" +
           "var clickTag=\"%s\";\n" +
           "</script>" +
           "<script src=\"https://code.createjs.com/1.0.0/createjs.min.js\"></script>";

   private static final String DELFI_TEMPLATE = "<script type=\"text/javascript\">\n" +
           "var clickTag=\"%s\";\n" +
           "</script>" +
           "<script src=\"https://code.createjs.com/1.0.0/createjs.min.js\"></script>";

   private static final String TVNET_TEMPLATE = "<script type=\"text/javascript\">\n" +
           "var clickTag=\"%s\";\n" +
           "</script>" +
           "<script src=\"https://code.createjs.com/1.0.0/createjs.min.js\"></script>";

   private static final String JAUNS_TEMPLATE = "<meta name=\"ad.size\" content=\"width=%s,height=%s\">\n" +
           "<script type=\"text/javascript\">\n" +
           "var clickTag=\"%s\";\n" +
           "</script>" +
           "<script src=\"https://code.createjs.com/1.0.0/createjs.min.js\"></script>";

   private static final String A_TAG_TEMPLATE = "<a href=\"javascript:window.open(window.clickTag)\">";

   private static String generateTemplate(String template, String width, String height, String clickTag) {
      return String.format(template, width, height, clickTag);
   }

   public static String getGoogle(String width, String height, String clickTag) {
      return generateTemplate(GOOGLE_TEMPLATE, width, height, clickTag);
   }

   public static String getInbox(String clickTag) {
      return String.format(INBOX_TEMPLATE, clickTag);
   }

   public static String getTvnet(String clickTag) {
      return String.format(TVNET_TEMPLATE, clickTag);
   }

   public static String getDelfi(String clickTag) {
      return String.format(TVNET_TEMPLATE, clickTag);
   }

   public static String getJauns(String width, String height, String clickTag) {
      return generateTemplate(JAUNS_TEMPLATE, width, height, clickTag);
   }

   public static String getATag() {
      return A_TAG_TEMPLATE;
   }
}
