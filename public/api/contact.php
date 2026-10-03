<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);

    $name = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
    $email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
    $message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
        exit();
    }

    $to = "sales@terraverdeconsulting.com";
    $subject = "New Website Enquiry from: " . $name;
    $body = "New Enquiry received via TerraVerde Consulting website:\n\n" .
            "Full Name: " . $name . "\n" .
            "Email: " . $email . "\n" .
            "Submitted At: " . date('Y-m-d H:i:s T') . "\n\n" .
            "Message:\n" . $message . "\n";

    $host = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'terraverdeconsulting.com';
    $headers = "From: noreply@" . $host . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    @mail($to, $subject, $body, $headers);

    echo json_encode([
        "status" => "success",
        "message" => "Thank you! Your enquiry has been received. Our advisory team will reach out shortly."
    ]);
    exit();
}

http_response_code(405);
echo json_encode(["status" => "error", "message" => "Method not allowed"]);
