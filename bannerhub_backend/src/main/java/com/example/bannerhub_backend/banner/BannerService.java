package com.example.bannerhub_backend.banner;

import jakarta.persistence.Lob;
import org.apache.commons.io.FileUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class BannerService {
    /*
    TODO
        Create method to extract data from html:
            - Get banner dimensions
            - Get size of file
     */

    public String getDimension(String path) {
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

        return width + "x" + height;
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
}
