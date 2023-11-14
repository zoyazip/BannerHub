package com.example.bannerhub_backend.banner;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Attributes;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

@Service
public class BannerService {
    /*
    TODO
        Create method to extract data from html:
            - Get banner dimensions
            - Get size of file
     */

    public String getDimension() {
        String width = "";
        String height = "";
        try {
            File html = new File("C:\\Users\\chern\\Documents\\BannerHub\\bannerhub_backend\\UploadedFiles\\jauns_euronics_tefal_300x600_lv\\index.html");
            Document doc = Jsoup.parse(html);
            Element canvas = doc.getElementById("canvas");
            width = canvas.attr("width");
            height = canvas.attr("height");
        } catch (IOException e) {
            System.out.println(e);
        }

        return width + "x" + height;
    }

}
