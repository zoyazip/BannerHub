package com.example.bannerhub_backend.file;

import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;



@Service
@RequiredArgsConstructor
public class StorageService {
    private final String uploadFolder = "UploadedFiles";

    public String saveUploadedFiles(List<MultipartFile> files) {
        try {
            for (MultipartFile file : files) {
                String relativePath = file.getOriginalFilename();
                Path filePath = Paths.get(uploadFolder, relativePath);
                Files.createDirectories(filePath.getParent());
                Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
                UnzipUtility.unzip(filePath.toString(), uploadFolder);
                removeFLA(uploadFolder);
                Files.deleteIfExists(filePath);
            }
            return "Files uploaded successfully!";
        } catch (IOException e) {
            return "Error uploading files: " + e.getMessage();
        }
    }

    public ArrayList<String> getListOfFolders() {
        File dir = new File(uploadFolder);
        return getSubfolders(dir.listFiles());
    }
    private ArrayList<String> getSubfolders(File[] folders) {
        ArrayList<String> childFolderPaths = new ArrayList<>();
        for (File folder : folders) {
            if (folder.isDirectory()) {
                childFolderPaths.add(folder.getParent() + "/" + folder.getName());
            }
        }
        return childFolderPaths;
    }

    private void removeFLA(String path) {
        File directory = new File(path);

        Collection<File> files = FileUtils.listFiles(directory, null, true);

        for (File file : files) {
            String fileName = file.getName();
            if (fileName.endsWith(".fla")) {
                file.delete();
            }
            System.out.println("File: " + fileName);
        }

    }

    public void removeBannersFromStorage() {
        try {
            File directory = new File(uploadFolder);
            FileUtils.cleanDirectory(directory);
        } catch (IOException e) {
            System.out.println(e);
        }
    }

}
