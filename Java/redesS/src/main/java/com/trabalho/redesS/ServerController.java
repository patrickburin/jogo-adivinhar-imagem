package com.trabalho.redesS;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Random;
import java.util.Set;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ServerController {

    private ServerSocket serverSocket;
    private Socket socket;
	private boolean entrarJogo=false;
	
    @GetMapping("/startServer")
    public String startServer() throws InterruptedException {
        try {
            serverSocket = new ServerSocket(4000);
            socket = serverSocket.accept();
            InputStreamReader inputReader = new InputStreamReader(socket.getInputStream());
            PrintStream saida = new PrintStream(socket.getOutputStream());
            BufferedReader reader = new BufferedReader(inputReader);

            System.out.println("Client connected");          
            
            while (entrarJogo == false) {
                Thread.sleep(100);
            }
            
            if (entrarJogo == true) {
            	entrarJogo = false;
            	PerguntaPais[] perguntasRespostas = {
                		new PerguntaPais("Brasil"),
        	            new PerguntaPais("Alemanha"),
        	            new PerguntaPais("Estados Unidos")
                };
            	
            	String[] paises = {"Afeganistão", "Albânia", "Argélia", "Samoa Americana", "Andorra", "Angola", "Anguilla", "Antártica", "Antígua e Barbuda", "Argentina", "Armênia", "Aruba", "Austrália", "Áustria", "Azerbaijão", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Bélgica", "Belize", "Benin", "Bermuda", "Butão", "Bolívia", "Bósnia e Herzegovina", "Botswana", "Ilha Bouvet", "Brasil", "Território Britânico do Oceano Índico", "Brunei Darussalam", "Bulgária", "Burkina Faso", "Burundi", "Camboja", "Camarões", "Canadá", "Cabo Verde", "Ilhas Cayman", "República Centro-Africana", "Chade", "Chile", "China", "Ilha de Natal", "Ilhas Cocos (Keeling)", "Colômbia", "Comores", "Congo", "República Democrática do Congo", "Ilhas Cook", "Costa Rica", "Costa do Marfim", "Croácia (Hrvatska)", "Cuba", "Chipre", "República Tcheca", "Dinamarca", "Djibuti", "Dominica", "República Dominicana", "Timor-Leste", "Equador", "Egito", "El Salvador", "Guiné Equatorial", "Eritreia", "Estônia", "Etiópia", "Ilhas Malvinas (Falkland)", "Ilhas Faroe", "Fiji", "Finlândia", "França", "Guiana Francesa", "Polinésia Francesa", "Territórios Franceses do Sul", "Gabão", "Gâmbia", "Geórgia", "Alemanha", "Gana", "Gibraltar", "Grécia", "Groenlândia", "Granada", "Guadalupe", "Guam", "Guatemala", "Guiné", "Guiné-Bissau", "Guiana", "Haiti", "Ilhas Heard e McDonald", "Santa Sé (Estado da Cidade do Vaticano)", "Honduras", "Hong Kong", "Hungria", "Islândia", "Índia", "Indonésia", "República Islâmica do Irã", "Iraque", "Irlanda", "Israel", "Itália", "Jamaica", "Japão", "Jordânia", "Cazaquistão", "Quênia", "Kiribati", "República Democrática Popular da Coreia", "República da Coreia", "Kuwait", "Quirguistão", "República Democrática Popular do Laos", "Letônia", "Líbano", "Lesoto", "Libéria", "Jamahiriya Árabe Líbia", "Liechtenstein", "Lituânia", "Luxemburgo", "Macau", "Macedônia, Antiga República Iugoslava da", "Madagáscar", "Malaui", "Malásia", "Maldivas", "Mali", "Malta", "Ilhas Marshall", "Martinica", "Mauritânia", "Maurícia", "Mayotte", "México", "Micronésia, Estados Federados da", "República da Moldávia", "Mônaco", "Mongólia", "Montserrat", "Marrocos", "Moçambique", "Myanmar", "Namíbia", "Nauru", "Nepal", "Países Baixos", "Antilhas Holandesas", "Nova Caledônia", "Nova Zelândia", "Nicarágua", "Níger", "Nigéria", "Niue", "Ilha Norfolk", "Ilhas Marianas do Norte", "Noruega", "Omã", "Paquistão", "Palau", "Panamá", "Papua Nova Guiné", "Paraguai", "Peru", "Filipinas", "Pitcairn", "Polônia", "Portugal", "Porto Rico", "Catar", "Reunião", "Romênia", "Federação Russa", "Ruanda", "São Cristóvão e Nevis", "Santa Lúcia", "São Vicente e Granadinas", "Samoa", "San Marino", "São Tomé e Príncipe", "Arábia Saudita", "Senegal", "Seychelles", "Serra Leoa", "Cingapura", "Eslováquia (República Eslovaca)", "Eslovênia", "Ilhas Salomão", "Somália", "África do Sul", "Geórgia do Sul e Ilhas Sandwich do Sul", "Espanha", "Sri Lanka", "Santa Helena", "São Pedro e Miquelon", "Sudão", "Suriname", "Ilhas Svalbard e Jan Mayen", "Suazilândia", "Suécia", "Suíça", "República Árabe da Síria", "Taiwan, Província da China", "Tajiquistão", "República Unida da Tanzânia", "Tailândia", "Togo", "Tokelau", "Tonga", "Trinidad e Tobago", "Tunísia", "Turquia", "Turcomenistão", "Ilhas Turcas e Caicos", "Tuvalu", "Uganda", "Ucrânia", "Emirados Árabes Unidos", "Reino Unido", "Estados Unidos", "Ilhas Menores Distantes dos Estados Unidos", "Uruguai", "Uzbequistão", "Vanuatu", "Venezuela", "Vietnã", "Ilhas Virgens (Britânicas)", "Ilhas Virgens (EUA)", "Ilhas Wallis e Futuna", "Saara Ocidental", "Iêmen", "Iugoslávia", "Zâmbia", "Zimbábue", "Palestina"};

            	Random random = new Random();
            	
            	for (int i = 0; i < 3; i++) {
            	    PerguntaPais perguntaAleatoria = perguntasRespostas[i];

            	    String pais = perguntaAleatoria.getPais();
            	    
            	    int[] indicesIncorretos = gerarIndicesIncorretos(paises, pais);
            	    
            	    int indiceCorreto = random.nextInt(4);
            	    String[] opcoes = new String[4];

            	    int opc=0;
            	    for (int j = 0; j < 4; j++) {
            	        if (j == indiceCorreto) {
            	            opcoes[j] = pais;
            	        } 
            	        
            	        else {
            	            opcoes[j] = paises[indicesIncorretos[opc]];
            	            opc++;
            	        }
            	    }
            	    
            	    for (int j = 0; j < 4; j++) {
            	    	saida.println(opcoes[j]);    	        
            	    }
            	    
            	    String resposta = reader.readLine();
            	    
            	    if (resposta.equalsIgnoreCase(pais)) {
            	        saida.println("Resposta correta! Parabéns.");
            	    } else {
            	        saida.println("Resposta incorreta. A resposta certa é: " + pais);
            	    }
            	}
        		
            }

            serverSocket.close();
            socket.close();
            saida.close();
            inputReader.close();
            reader.close();
            System.exit(0);

            return "Server finished";
        } catch (IOException e) {
            e.printStackTrace();
            return "Error occurred on the server";
        }
    }
    
    private static int[] gerarIndicesIncorretos(String[] paises, String respostaCorreta) {
        Random random = new Random();
        int[] indicesIncorretos = new int[3];
        int respostaCorretaIndex = Arrays.asList(paises).indexOf(respostaCorreta);

        Set<Integer> indicesAleatorios = new HashSet<>();
        while (indicesAleatorios.size() < 3) {
            int indiceAleatorio;
            do {
                indiceAleatorio = random.nextInt(paises.length);
            } while (indiceAleatorio == respostaCorretaIndex || indicesAleatorios.contains(indiceAleatorio));
            indicesAleatorios.add(indiceAleatorio);
        }

        Iterator<Integer> iterator = indicesAleatorios.iterator();
        int i = 0;
        while (iterator.hasNext()) {
            indicesIncorretos[i] = iterator.next();
            i++;
        }
        return indicesIncorretos;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/postEntrarJogo")
    public void entrarJogo() {
    	entrarJogo = true;
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping("/fecharConexaoServer")
    public void fecharConexao() {
        try {
            if (socket != null && !socket.isClosed()) {
                socket.close();
            }
            if (serverSocket != null && !serverSocket.isClosed()) {
            	serverSocket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
}

class PerguntaPais {
    private String pais;

    public PerguntaPais(String pais) {
        this.pais = pais;
    }

    public String getPais() {
        return pais;
    }
}