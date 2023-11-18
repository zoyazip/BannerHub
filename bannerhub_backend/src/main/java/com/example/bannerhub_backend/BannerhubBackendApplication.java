package com.example.bannerhub_backend;

import com.example.bannerhub_backend.file.StorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class BannerhubBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BannerhubBackendApplication.class, args);
	}

}
