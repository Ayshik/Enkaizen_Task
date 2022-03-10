<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Login;
use App\Models\Admininfo;
use App\Models\Userinfo;

class Crudoparation extends Controller
{
    public function login(Request $req) {
       
        $user=Login::where('Username', $req->username)->where('Password', $req->password)->first();

        if($user) {
           
            return $user;

        }

        return "No user found";

    }

    public function Adduser(Request $req) {

        $adduser=new Userinfo();
        $adduser->Username=$req->username;
        $adduser->Fullname=$req->fullname;
       
        $adduser->Password=$req->password;
        $adduser->Address=$req->address;
        $adduser->Phoneno=$req->phone;


        $adduser->save();
        $addlog=new Login();
        $addlog->Fullname=$req->fullname;
        $addlog->Username=$req->username;
        $addlog->Password=$req->password;
        $addlog->Type='User';

        $addlog->save();
        if($adduser->save()) return "Successful";
    }
    public function Addadmin(Request $req) {

        $addadmin=new Admininfo();
        $addadmin->Username=$req->username;
        $addadmin->Fullname=$req->fullname;
       
        $addadmin->Password=$req->password;
        $addadmin->Address=$req->address;
        $addadmin->Phoneno=$req->phone;


        $addadmin->save();
        $addlog=new Login();
        $addlog->Fullname=$req->fullname;
        $addlog->Username=$req->username;
        $addlog->Password=$req->password;
        $addlog->Type='Admin';

        $addlog->save();
        if($addadmin->save()) return "Successful";
    }


    public function user_info() {
        $products=Userinfo::all();



        return $products;


    }

    public function edit_user($id) {
        $products=Userinfo::find($id);

        if($products) {
            return $products;

        }

    }

    public function updateuser(Request $req, $id) {

        $products=Userinfo::find($id);

        if($products) {



            $products->Fullname=$req->Fullname;
            $products->Phoneno=$req->Phoneno;
            $products->Address=$req->Address;
          
            $products->update();

        }
    }
        public function deleteuser($id) {
            $products=Userinfo::find($id);
    
            if($products) {
                $products->delete();
                $Log=Login::find($id);
                if($Log) {
                    $Log->delete();  
                }
            }
    
        }



        //Admin 

        public function admin_info() {
            $products=Admininfo::all();
    
    
    
            return $products;
    
    
        }
    
        public function edit_admin($id) {
            $products=Admininfo::find($id);
    
            if($products) {
                return $products;
    
            }
    
        }
    
        public function updateadmin(Request $req, $id) {
    
            $products=Admininfo::find($id);
    
            if($products) {
    
    
    
                $products->Fullname=$req->Fullname;
                $products->Phoneno=$req->Phoneno;
                $products->Address=$req->Address;
              
                $products->update();
    
            }
        }
            public function deleteadmin($id) {
                $products=Admininfo::find($id);
        
                if($products) {
                    $products->delete();
                    $Log=Login::find($id);
                    if($Log) {
                        $Log->delete();  
                    }
                }
        
            }




            public function User_profile_update(Request $req, $id) {

                $products=Userinfo::where('Username', $id)->first();
        
        
        
        
        
        
        
                $products->Fullname=$req->Fullname;
                $products->Phoneno=$req->Phoneno;
                $products->Address=$req->Address;
                $products->Password=$req->Password;
               
                $products->update();
                $log=Login::where('Username', $id)->first();
                if($log)
                {
                    $log->Fullname=$req->Fullname;
                 
                    $log->Password=$req->Password;
                    $log->update();
                    if($log->update()) return "Successful";

                }
            }
        
        
        
            public function User_profile($id) {
                // $products = modarator::find($id);
                // return response()->json(['status' => 200, 'posts' => $products]);
        
                $products=Userinfo::where('Username', $id)->first();
                return $products;
            }
        
    
}
