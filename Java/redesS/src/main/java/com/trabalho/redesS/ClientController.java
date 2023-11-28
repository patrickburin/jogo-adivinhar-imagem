package com.trabalho.redesS;

import java.io.*;
import java.net.Socket;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController {

    private String[] opcoes;
    private String opcoesCorreta = null;
    private Socket socket;
    
    @GetMapping("/startClient")
    public String[] startClient() throws InterruptedException {
        try {
        	socket = new Socket("localhost", 4000);
            BufferedReader serverInput = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));
            PrintStream saida = new PrintStream(socket.getOutputStream());

    	    for (int i = 0; i < 3; i++) {
    	    	
    	        opcoes = new String[4];
    	        
    	        for (int j = 0; j < 4; j++) {
    	            opcoes[j] = serverInput.readLine(); 	            
    	            System.out.println((j + 1) + ") " + opcoes[j]);
    	        }
    	        
    	        while (opcoesCorreta == null) {
                    Thread.sleep(100);
                }
                saida.println(opcoesCorreta);
                
                opcoesCorreta = null;
                
    	        String serverMensagem = serverInput.readLine();
    	        System.out.println(serverMensagem);
    	    }

            socket.close();
            saida.close();
            serverInput.close();
            userInput.close();
            System.exit(0);
        } catch (IOException e) {
            e.printStackTrace();
    		return null;
        }

		return null;
    }
    
    @CrossOrigin(origins = "*")
    @GetMapping("/getOptions")
    public ResponseEntity<String[]> getOptions() {
        if (opcoes != null) {
            return ResponseEntity.ok(opcoes);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping("/postOption")
    public void receberDados(@RequestBody String variavel) {
    	
    	opcoesCorreta = variavel;
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping("/fecharConexaoClient")
    public void fecharConexao() {
        try {
            if (socket != null && !socket.isClosed()) {
                socket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}