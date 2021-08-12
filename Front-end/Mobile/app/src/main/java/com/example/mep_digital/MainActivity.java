package com.example.mep_digital;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    /**
     * Escoge la ruta adecuada dependiendo el tipo de usuario
     * @param view
     */
    public void router(View view){
        //Aqui decido que tipo de usuario es
        goToAdminActivity();
    }

    /**
     * Crea el intent para cambiar al activity para Admin
     */
    private void goToAdminActivity(){
        Intent intent = new Intent(this,AdminActivity.class);
        startActivity(intent);
    }
}