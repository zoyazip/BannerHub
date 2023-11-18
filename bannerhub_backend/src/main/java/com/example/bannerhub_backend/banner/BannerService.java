package com.example.bannerhub_backend.banner;

import org.apache.commons.io.FileUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;


@Service
public class BannerService {
    /*
    TODO
        Create method to extract data from html:
            - Get banner dimensions
            - Get size of file
     */

    public HashMap<String, String> getDimension(String path) {
        HashMap<String, String> dimensionData = new HashMap<>();
        String width = "";
        String height = "";
        try {
            File html = openFile(path);
            Document doc = Jsoup.parse(html);
            Element canvas = doc.getElementById("canvas");
            width = canvas.attr("width");
            height = canvas.attr("height");
        } catch (IOException e) {
            System.out.println(e);
        }
        dimensionData.put("width", width);
        dimensionData.put("height", height);
        dimensionData.put("dimension", width + "x" + height);

        return dimensionData;
    }

    public String getName(String path) {
        return openFile(path).getParentFile().getName();
    }

    public String getSpecificationFromFileName(String path) {
        String name = getName(path).toLowerCase();
        String spec = name.substring(0, name.indexOf("_"));
        switch (spec) {
            case "jauns":
                return "jauns";
            case "gdn":
                return "gdn";
            case "tvnet":
                return "tvnet";
            case "inbox":
                return "inbox";
            case "google":
                return "google";
            case "delfi":
                return "delfi";
            default:
                return "google";
        }
    }

    public String getBannerSize(String path) {
        File folder = openFile(path);
        double size = FileUtils.sizeOfDirectory(folder)/1024;
        return size + "kb";
    }

    private File openFile(String path) {
        return new File(path);
    }

    public void setSpecificationOfBanner(BannerEntity banner) {
        String pathToHtml = banner.getPathToHtml();
        String spec = banner.getSpec();
        String dimensions = banner.getDimension();
        String width = banner.getWidth();
        String height = banner.getHeight();
        String link = banner.getUrl();

        String specCode;
        switch (spec) {
            case "delfi":
                specCode = Specifications.getDelfi(link);
                break;
            case "jauns":
                specCode = Specifications.getGoogle(width, height, link);
                break;
            case "tvnet":
                specCode = Specifications.getTvnet(link);
                break;
            case "inbox":
                specCode = Specifications.getInbox(link);
                break;
            default:
                specCode = Specifications.getGoogle(width, height,link);
                break;
        }
        File html = openFile(pathToHtml);
        try {
            Document doc = Jsoup.parse(html);
            Element head = doc.head();
            head.getElementsByAttributeValue("src", "https://code.createjs.com/1.0.0/createjs.min.js").remove();
            head.prepend(specCode);

            Element body = doc.body();
            body.children().wrap(Specifications.getATag());
            FileUtils.writeStringToFile(new File(pathToHtml), doc.outerHtml(), "UTF-8");
        } catch (IOException e) {
            System.out.println("Error by setting specification of banner: " + e);
        }


    }
}
