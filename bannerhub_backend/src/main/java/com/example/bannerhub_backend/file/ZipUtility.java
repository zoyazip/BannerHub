package com.example.bannerhub_backend.file;

import org.apache.commons.io.FileUtils;
import org.zeroturnaround.zip.ZipUtil;

import java.io.*;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/*
    This utility is used to work with Zip
        - Here I'm using zeroturnaround Library to make life easier
 */
public class ZipUtility {
    public static void unzip(String zipFilePath, String destDirectory) throws IOException {
        File destDir = new File(destDirectory);
        if (!destDir.exists()) {
            destDir.mkdir();
        }

        try (ZipInputStream zipIn = new ZipInputStream(new FileInputStream(zipFilePath))) {
            ZipEntry entry = zipIn.getNextEntry();

            while (entry != null) {
                String filePath = destDirectory + File.separator + entry.getName();
                if (!entry.isDirectory()) {
                    extractFile(zipIn, filePath);
                } else {
                    File dir = new File(filePath);
                    dir.mkdir();
                }
                zipIn.closeEntry();
                entry = zipIn.getNextEntry();
            }
        }
    }

    private static void extractFile(ZipInputStream zipIn, String filePath) throws IOException {
        try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(filePath))) {
            byte[] bytesIn = new byte[4096];
            int read;
            while ((read = zipIn.read(bytesIn)) != -1) {
                bos.write(bytesIn, 0, read);
            }
        }
    }

    public static void zip(List<String> paths, String exportPath, String uploadPath) {
        for (String path : paths) {
            File initFile = new File(path);
            File exportFile = new File(path + ".zip");

            ZipUtil.pack(initFile, exportFile);
            try {
                FileUtils.deleteDirectory(initFile);
            } catch (IOException e) {
                System.out.println("Error while removing init directories: " + e);
            }

        }
        ZipUtil.pack(new File(uploadPath), new File(exportPath));
    }
}
