import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Admin credentials
    const adminEmail = "egift531@gmail.com";
    const adminPassword = "Miss19882106#";

    // Check if admin already exists
    const { data: existingUsers, error: listError } = await supabase.auth.admin.listUsers();
    if (listError) throw listError;

    const existingAdmin = existingUsers?.users?.find(
      (u) => u.email === adminEmail
    );

    if (existingAdmin) {
      // Update to admin if already exists
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ is_admin: true })
        .eq("id", existingAdmin.id);

      if (updateError) throw updateError;

      return new Response(
        JSON.stringify({
          success: true,
          message: "Admin user already existed. Updated to admin role.",
          userId: existingAdmin.id,
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    // Create the admin user
    const { data: newUser, error: createError } =
      await supabase.auth.admin.createUser({
        email: adminEmail,
        password: adminPassword,
        email_confirm: true,
        user_metadata: { full_name: "Admin" },
      });

    if (createError) throw createError;

    // Update profile to set is_admin = true
    const { error: profileError } = await supabase
      .from("profiles")
      .update({ is_admin: true, full_name: "Admin" })
      .eq("id", newUser.user.id);

    if (profileError) throw profileError;

    return new Response(
      JSON.stringify({
        success: true,
        message: "Admin user created successfully!",
        userId: newUser.user.id,
        email: adminEmail,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
